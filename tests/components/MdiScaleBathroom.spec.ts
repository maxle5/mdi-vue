
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScaleBathroom from "../../src/components/MdiScaleBathroom.vue";

test("MdiScaleBathroom snapshot", () => {
  const wrapper = mount(MdiScaleBathroom, {});
  expect(wrapper.html()).toMatchSnapshot();
});
