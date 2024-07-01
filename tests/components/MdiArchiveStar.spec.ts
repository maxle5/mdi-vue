
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveStar from "../../src/components/MdiArchiveStar.vue";

test("MdiArchiveStar snapshot", () => {
  const wrapper = mount(MdiArchiveStar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
