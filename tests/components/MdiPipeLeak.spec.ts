
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPipeLeak from "../../src/components/MdiPipeLeak.vue";

test("MdiPipeLeak snapshot", () => {
  const wrapper = mount(MdiPipeLeak, {});
  expect(wrapper.html()).toMatchSnapshot();
});
