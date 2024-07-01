
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTransferLeft from "../../src/components/MdiTransferLeft.vue";

test("MdiTransferLeft snapshot", () => {
  const wrapper = mount(MdiTransferLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
