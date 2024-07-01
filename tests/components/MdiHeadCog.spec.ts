
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadCog from "../../src/components/MdiHeadCog.vue";

test("MdiHeadCog snapshot", () => {
  const wrapper = mount(MdiHeadCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
