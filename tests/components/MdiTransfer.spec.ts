
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTransfer from "../../src/components/MdiTransfer.vue";

test("MdiTransfer snapshot", () => {
  const wrapper = mount(MdiTransfer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
