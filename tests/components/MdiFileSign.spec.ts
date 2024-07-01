
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileSign from "../../src/components/MdiFileSign.vue";

test("MdiFileSign snapshot", () => {
  const wrapper = mount(MdiFileSign, {});
  expect(wrapper.html()).toMatchSnapshot();
});
