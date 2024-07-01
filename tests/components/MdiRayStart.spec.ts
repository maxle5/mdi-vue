
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRayStart from "../../src/components/MdiRayStart.vue";

test("MdiRayStart snapshot", () => {
  const wrapper = mount(MdiRayStart, {});
  expect(wrapper.html()).toMatchSnapshot();
});
