
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageSizeSelectActual from "../../src/components/MdiImageSizeSelectActual.vue";

test("MdiImageSizeSelectActual snapshot", () => {
  const wrapper = mount(MdiImageSizeSelectActual, {});
  expect(wrapper.html()).toMatchSnapshot();
});
