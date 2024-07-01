
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTransferUp from "../../src/components/MdiTransferUp.vue";

test("MdiTransferUp snapshot", () => {
  const wrapper = mount(MdiTransferUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
