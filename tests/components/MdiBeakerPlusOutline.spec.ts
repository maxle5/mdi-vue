
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBeakerPlusOutline from "../../src/components/MdiBeakerPlusOutline.vue";

test("MdiBeakerPlusOutline snapshot", () => {
  const wrapper = mount(MdiBeakerPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
