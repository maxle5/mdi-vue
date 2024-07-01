
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorPolygon from "../../src/components/MdiVectorPolygon.vue";

test("MdiVectorPolygon snapshot", () => {
  const wrapper = mount(MdiVectorPolygon, {});
  expect(wrapper.html()).toMatchSnapshot();
});
