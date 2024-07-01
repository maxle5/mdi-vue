
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPageNext from "../../src/components/MdiPageNext.vue";

test("MdiPageNext snapshot", () => {
  const wrapper = mount(MdiPageNext, {});
  expect(wrapper.html()).toMatchSnapshot();
});
