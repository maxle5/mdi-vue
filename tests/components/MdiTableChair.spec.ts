
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableChair from "../../src/components/MdiTableChair.vue";

test("MdiTableChair snapshot", () => {
  const wrapper = mount(MdiTableChair, {});
  expect(wrapper.html()).toMatchSnapshot();
});
