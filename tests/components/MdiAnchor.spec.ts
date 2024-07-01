
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAnchor from "../../src/components/MdiAnchor.vue";

test("MdiAnchor snapshot", () => {
  const wrapper = mount(MdiAnchor, {});
  expect(wrapper.html()).toMatchSnapshot();
});
