
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNaturePeople from "../../src/components/MdiNaturePeople.vue";

test("MdiNaturePeople snapshot", () => {
  const wrapper = mount(MdiNaturePeople, {});
  expect(wrapper.html()).toMatchSnapshot();
});
