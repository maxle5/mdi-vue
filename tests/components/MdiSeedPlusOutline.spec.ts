
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSeedPlusOutline from "../../src/components/MdiSeedPlusOutline.vue";

test("MdiSeedPlusOutline snapshot", () => {
  const wrapper = mount(MdiSeedPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
