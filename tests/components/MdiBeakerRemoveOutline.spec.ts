
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBeakerRemoveOutline from "../../src/components/MdiBeakerRemoveOutline.vue";

test("MdiBeakerRemoveOutline snapshot", () => {
  const wrapper = mount(MdiBeakerRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
