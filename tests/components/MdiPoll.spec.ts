
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPoll from "../../src/components/MdiPoll.vue";

test("MdiPoll snapshot", () => {
  const wrapper = mount(MdiPoll, {});
  expect(wrapper.html()).toMatchSnapshot();
});
