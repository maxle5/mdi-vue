
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorPolygonVariant from "../../src/components/MdiVectorPolygonVariant.vue";

test("MdiVectorPolygonVariant snapshot", () => {
  const wrapper = mount(MdiVectorPolygonVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
