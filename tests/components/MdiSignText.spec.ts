
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSignText from "../../src/components/MdiSignText.vue";

test("MdiSignText snapshot", () => {
  const wrapper = mount(MdiSignText, {});
  expect(wrapper.html()).toMatchSnapshot();
});
