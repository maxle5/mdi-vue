
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiZodiacAquarius from "../../src/components/MdiZodiacAquarius.vue";

test("MdiZodiacAquarius snapshot", () => {
  const wrapper = mount(MdiZodiacAquarius, {});
  expect(wrapper.html()).toMatchSnapshot();
});
