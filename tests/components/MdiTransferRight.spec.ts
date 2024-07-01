
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTransferRight from "../../src/components/MdiTransferRight.vue";

test("MdiTransferRight snapshot", () => {
  const wrapper = mount(MdiTransferRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
