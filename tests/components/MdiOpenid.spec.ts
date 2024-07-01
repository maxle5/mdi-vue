
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOpenid from "../../src/components/MdiOpenid.vue";

test("MdiOpenid snapshot", () => {
  const wrapper = mount(MdiOpenid, {});
  expect(wrapper.html()).toMatchSnapshot();
});
