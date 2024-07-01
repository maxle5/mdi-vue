
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileSendOutline from "../../src/components/MdiFileSendOutline.vue";

test("MdiFileSendOutline snapshot", () => {
  const wrapper = mount(MdiFileSendOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
