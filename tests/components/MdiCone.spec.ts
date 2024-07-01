
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCone from "../../src/components/MdiCone.vue";

test("MdiCone snapshot", () => {
  const wrapper = mount(MdiCone, {});
  expect(wrapper.html()).toMatchSnapshot();
});
