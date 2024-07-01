
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorPolyline from "../../src/components/MdiVectorPolyline.vue";

test("MdiVectorPolyline snapshot", () => {
  const wrapper = mount(MdiVectorPolyline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
