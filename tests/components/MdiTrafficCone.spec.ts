
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrafficCone from "../../src/components/MdiTrafficCone.vue";

test("MdiTrafficCone snapshot", () => {
  const wrapper = mount(MdiTrafficCone, {});
  expect(wrapper.html()).toMatchSnapshot();
});
