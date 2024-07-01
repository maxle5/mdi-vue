
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInstagram from "../../src/components/MdiInstagram.vue";

test("MdiInstagram snapshot", () => {
  const wrapper = mount(MdiInstagram, {});
  expect(wrapper.html()).toMatchSnapshot();
});
