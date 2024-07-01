
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiToslink from "../../src/components/MdiToslink.vue";

test("MdiToslink snapshot", () => {
  const wrapper = mount(MdiToslink, {});
  expect(wrapper.html()).toMatchSnapshot();
});
