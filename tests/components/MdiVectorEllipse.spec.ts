
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorEllipse from "../../src/components/MdiVectorEllipse.vue";

test("MdiVectorEllipse snapshot", () => {
  const wrapper = mount(MdiVectorEllipse, {});
  expect(wrapper.html()).toMatchSnapshot();
});
