
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeartCog from "../../src/components/MdiHeartCog.vue";

test("MdiHeartCog snapshot", () => {
  const wrapper = mount(MdiHeartCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
