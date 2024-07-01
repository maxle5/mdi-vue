
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClouds from "../../src/components/MdiClouds.vue";

test("MdiClouds snapshot", () => {
  const wrapper = mount(MdiClouds, {});
  expect(wrapper.html()).toMatchSnapshot();
});
