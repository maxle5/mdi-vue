
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCropSquare from "../../src/components/MdiCropSquare.vue";

test("MdiCropSquare snapshot", () => {
  const wrapper = mount(MdiCropSquare, {});
  expect(wrapper.html()).toMatchSnapshot();
});
