
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorPolylineRemove from "../../src/components/MdiVectorPolylineRemove.vue";

test("MdiVectorPolylineRemove snapshot", () => {
  const wrapper = mount(MdiVectorPolylineRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
