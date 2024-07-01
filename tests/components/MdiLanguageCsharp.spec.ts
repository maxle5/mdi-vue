
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLanguageCsharp from "../../src/components/MdiLanguageCsharp.vue";

test("MdiLanguageCsharp snapshot", () => {
  const wrapper = mount(MdiLanguageCsharp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
