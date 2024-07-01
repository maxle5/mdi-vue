
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShoeHeel from "../../src/components/MdiShoeHeel.vue";

test("MdiShoeHeel snapshot", () => {
  const wrapper = mount(MdiShoeHeel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
