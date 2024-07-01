
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrello from "../../src/components/MdiTrello.vue";

test("MdiTrello snapshot", () => {
  const wrapper = mount(MdiTrello, {});
  expect(wrapper.html()).toMatchSnapshot();
});
