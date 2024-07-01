
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLeak from "../../src/components/MdiLeak.vue";

test("MdiLeak snapshot", () => {
  const wrapper = mount(MdiLeak, {});
  expect(wrapper.html()).toMatchSnapshot();
});
