
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCannabis from "../../src/components/MdiCannabis.vue";

test("MdiCannabis snapshot", () => {
  const wrapper = mount(MdiCannabis, {});
  expect(wrapper.html()).toMatchSnapshot();
});
