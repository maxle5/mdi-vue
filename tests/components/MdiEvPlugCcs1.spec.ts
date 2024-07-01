
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEvPlugCcs1 from "../../src/components/MdiEvPlugCcs1.vue";

test("MdiEvPlugCcs1 snapshot", () => {
  const wrapper = mount(MdiEvPlugCcs1, {});
  expect(wrapper.html()).toMatchSnapshot();
});
