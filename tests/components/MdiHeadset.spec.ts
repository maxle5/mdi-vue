
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadset from "../../src/components/MdiHeadset.vue";

test("MdiHeadset snapshot", () => {
  const wrapper = mount(MdiHeadset, {});
  expect(wrapper.html()).toMatchSnapshot();
});
