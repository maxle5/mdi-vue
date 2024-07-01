
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFreebsd from "../../src/components/MdiFreebsd.vue";

test("MdiFreebsd snapshot", () => {
  const wrapper = mount(MdiFreebsd, {});
  expect(wrapper.html()).toMatchSnapshot();
});
