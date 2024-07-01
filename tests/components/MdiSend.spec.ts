
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSend from "../../src/components/MdiSend.vue";

test("MdiSend snapshot", () => {
  const wrapper = mount(MdiSend, {});
  expect(wrapper.html()).toMatchSnapshot();
});
