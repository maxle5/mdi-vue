
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorPolylinePlus from "../../src/components/MdiVectorPolylinePlus.vue";

test("MdiVectorPolylinePlus snapshot", () => {
  const wrapper = mount(MdiVectorPolylinePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
