
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCogTransferOutline from "../../src/components/MdiCogTransferOutline.vue";

test("MdiCogTransferOutline snapshot", () => {
  const wrapper = mount(MdiCogTransferOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
