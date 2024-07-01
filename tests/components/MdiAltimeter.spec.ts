
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAltimeter from "../../src/components/MdiAltimeter.vue";

test("MdiAltimeter snapshot", () => {
  const wrapper = mount(MdiAltimeter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
