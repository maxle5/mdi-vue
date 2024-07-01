
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAspectRatio from "../../src/components/MdiAspectRatio.vue";

test("MdiAspectRatio snapshot", () => {
  const wrapper = mount(MdiAspectRatio, {});
  expect(wrapper.html()).toMatchSnapshot();
});
