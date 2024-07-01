
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTumbleDryer from "../../src/components/MdiTumbleDryer.vue";

test("MdiTumbleDryer snapshot", () => {
  const wrapper = mount(MdiTumbleDryer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
