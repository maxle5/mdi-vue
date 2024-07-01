
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiYoutube from "../../src/components/MdiYoutube.vue";

test("MdiYoutube snapshot", () => {
  const wrapper = mount(MdiYoutube, {});
  expect(wrapper.html()).toMatchSnapshot();
});
