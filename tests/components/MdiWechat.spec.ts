
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWechat from "../../src/components/MdiWechat.vue";

test("MdiWechat snapshot", () => {
  const wrapper = mount(MdiWechat, {});
  expect(wrapper.html()).toMatchSnapshot();
});
