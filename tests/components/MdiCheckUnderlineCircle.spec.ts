
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckUnderlineCircle from "../../src/components/MdiCheckUnderlineCircle.vue";

test("MdiCheckUnderlineCircle snapshot", () => {
  const wrapper = mount(MdiCheckUnderlineCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
