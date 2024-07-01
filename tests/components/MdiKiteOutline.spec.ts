
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKiteOutline from "../../src/components/MdiKiteOutline.vue";

test("MdiKiteOutline snapshot", () => {
  const wrapper = mount(MdiKiteOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
