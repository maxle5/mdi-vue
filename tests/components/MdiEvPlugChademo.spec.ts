
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEvPlugChademo from "../../src/components/MdiEvPlugChademo.vue";

test("MdiEvPlugChademo snapshot", () => {
  const wrapper = mount(MdiEvPlugChademo, {});
  expect(wrapper.html()).toMatchSnapshot();
});
